import Article from "../components/Article";
import New from "../components/New";
import Popular from "../components/Popular";
import React from "react";

function fWithArticle(Component) {
    return function(props, ...args) {
        
        if (props.views<100) {
            return <New>{Component.apply(this, [props, ...args])}</New>
        }
        if (props.views>=1000) {
            return <Popular>{Component.apply(this, [props, ...args])}</Popular>
        }
        return Component.apply(this, [props, ...args]);        
    }
}

const HandledArticle = fWithArticle(Article);
export default HandledArticle;