
function Card({information}) {

    return (
        <div className="card m-4 mt-2">
            <div className="card-body p-2">
                <h6>{information.text}</h6>
                <p>Is Palindrome? {information.palindrome === true ? "YES!" : "NO!"}</p>
            </div>
        </div>
    );
}

export default Card;