import React from "react";
import { useState } from "react";
import { block } from "../../../helpers/delay";
import { Post } from "../../../models/post";
import { fetchPosts } from "../../../services/posts";

const slowSortFunction = (data: Array<Post>) => {
    block();
    return data.sort((a, b) => a.title.localeCompare(b.title));
};

const useSortedData = (): [Array<Post>, (posts: Array<Post>) => void] => {
    // on stocke les données dans le state du composant, pour pouvoir les manipuler
    const [data, setData] = useState<Array<Post>>([]);

    React.useEffect(() => {
        (async () => {
            const posts = await fetchPosts();
            setData(posts);
        })();
        return () => {
            
        }
    }, []);

    // on dit que le memo a une dépendance sur data, pour que le tri se refasse quand on modifie data
    const sortedItems = React.useMemo(() => {
        return slowSortFunction(data);
    }, [data]);

    return [sortedItems, setData];
};

export default useSortedData;
