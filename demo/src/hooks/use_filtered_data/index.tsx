import React, { useState } from "react";

// Externals
import { useSelector } from "react-redux";

// Models
import { Post } from "../../models/post";

// Utils
import { block } from "../../helpers/delay";
import { RootState } from "../../data/rootReducer";

const slowSortFunction = (data: Array<Post>) => {
    block();
    return data.sort((a, b) => a.title.localeCompare(b.title));
};

const useFilteredData = (): [
    Post[],
    (posts: Array<Post>) => void,
    string,
    React.Dispatch<React.SetStateAction<string>>
] => {
    const initialData = useSelector<RootState, Array<Post>>(
        (state) => state.posts.posts
    );

    React.useEffect(() => {
        console.log("update data", initialData)
        setData(initialData);
    }, [initialData]);

    // on stocke les données dans le state du composant, pour pouvoir les manipuler
    const [data, setData] = useState<Array<Post>>(initialData);
    const [filter, setFilter] = useState("");

    // on dit que le memo a une dépendance sur data, pour que le tri se refasse quand on modifie data
    const sortedItems = React.useMemo(() => {
        return slowSortFunction(data);
    }, [data]);

    const filteredItems = sortedItems.filter(
        (s) => s.title.indexOf(filter) >= 0 || s.body.indexOf(filter) >= 0
    );

    // why return an array ?
    return [filteredItems, setData, filter, setFilter];
};

export default useFilteredData;
