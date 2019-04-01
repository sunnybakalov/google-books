import React from "react";

function Results() {
    return (
        <div className="card">
            <div className="topOfCard">
            <div className="text">
                <h2>Title</h2>
                <h4>Sub-Title</h4>
                <h6>Author</h6>
            </div>
            <div className="resultButtons">
                <button type="button" className="btn btn-dark">View</button>
                <button type="button" className="btn btn-dark">Delete</button>
            </div>
            </div>
            <div className="bottomOfCard">
                <div className="picOfBook">
                <img src="https://upload.wikimedia.org/wikipedia/en/c/c7/Michael_Jordan_crying.jpg" alt="jordan">
                </img>
                </div>
                <div className="bookSummary">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a</p>
                </div>
            </div>
        </div>
    )
}

export default Results;