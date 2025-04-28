import "./Emoji.css"

function Emoji({ Won }) {
    const stylesWon = { color: "Green" }
    const stylesLost = { color: "Red" }
    return (
        <div class="ImagesHolder">
            {(Won) ?
                <div>
                    <img src="/assets/heart.jpg" />
                    <img src="/assets/sunglasses.jpg" />
                    <img src="/assets/heart.jpg" />
                </div>

                :
                <div>
                    <img src="/assets/sunglasses.jpg" />
                    <img src="/assets/sunglasses.jpg" />
                    <img src="/assets/sunglasses.jpg" />
                </div>
            }
            {(Won) ?
                <h2 style={stylesWon}>You won! :)</h2>
                :
                <h2 style={stylesLost}>You Lost! :(</h2>
            }
        </div>
    );
}

export default Emoji;
