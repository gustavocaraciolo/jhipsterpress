import { Moment } from 'moment';
import { IPost } from 'app/shared/model//post.model';

export interface IBlog {
    id?: number;
    creationDate?: Moment;
    title?: string;
    imageContentType?: string;
    image?: any;
    posts?: IPost[];
    communityId?: number;
}

export class Blog implements IBlog {
    constructor(
        public id?: number,
        public creationDate?: Moment,
        public title?: string,
        public imageContentType?: string,
        public image?: any,
        public posts?: IPost[],
        public communityId?: number
    ) {}
}
