import { HelpTag } from './helpTag';
export class Post {
 
    title:string;
    text:string;
    tags:HelpTag[];
    time:any;
    category:string;
    claimed:boolean = false;
    confirmed: boolean = false;
    location: string;
    author:string;
    claimedBy:string;
    uid:string;
    id:string
    contact:string
}