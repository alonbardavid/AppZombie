import {observable,action,autorun,whyRun} from "mobx";
import {Post} from "src/logic/posts/model";
import {Api,Schema} from 'src/api';
import {UiStore} from "src/logic/ui/store";
import {UsersStore} from "src/logic/users/store";

export class PostStore {
    @observable
    posts = {} as {[id:number]:Post};

    @observable
    postList:Post[] = [];

    @observable
    refreshing? = false;

    private uiStore:UiStore;
    private usersStore:UsersStore;
    private api:Api;

    constructor(api,uiStore,usersStore){
        this.api = api;
        this.uiStore=uiStore;
        this.usersStore = usersStore;
    }
    refreshPosts = async ()=>{
        try {
            this.refreshing = true;
            const posts:Schema.Post[] = await this.api.getPosts();
            this.postList = posts.map(p => this._updatePost(p));
            this.refreshing = false;
        } catch (e){
            this.uiStore.addError("failed to load posts " + e.message);
            this.refreshing = false;
        }

    };
    private _updatePost = (post:Schema.Post):Post=>{
        let original = this.posts[post.id];
        if (!original){
            original = this.posts[post.id] = new Post();
            original.id = post.id;
        }
        original.title = post.title;
        original.body = post.body;
        original.user = this.usersStore.getUser(post.userId);
        return this.posts[post.id];
    }
}