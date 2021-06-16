import { Post } from "../../models/post";

import dataSource from "../../data/data.json";
import * as delay from "delay";

export const fetchPosts = async (): Promise<Array<Post>> => {
    await delay.range(20, 100);
    return dataSource;
};
