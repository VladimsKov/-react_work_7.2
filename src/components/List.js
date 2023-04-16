import HandledArticle from "../functions/fWithArticle";
import HandledVideo from "../functions/fWithVideo";

function List(props) {
    return props.list.map((item, i) => {
        switch (item.type) {
            case 'video':
            return (
                <HandledVideo key={i} {...item} />
                );
                
                case 'article':
                return (
                    <HandledArticle key={i} {...item} />
                    );
                }
            });
        }
        
export default List;
        