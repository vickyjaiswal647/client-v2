import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReadMore = ( props ) => {
    //const text = children;
    const publicId = props.currentPublicFeed;
    //const [isReadMore, setIsReadMore] = useState(true);

    return (
        <div>
	    <p className="text">
	     {/* {text} */}
	    <span onClick={()=>{props.changedFeed(publicId)}}>
		     <Link to = '/articles'>...read more</Link>
	    </span>
	    </p>
        </div>
    )
}
export default ReadMore