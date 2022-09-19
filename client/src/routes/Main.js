import { Link } from "react-router-dom";

export default function Main() {
    return (
        <>
        <section>
            <div>
                <Link to={'/DungeonFloor'}>던전가기</Link>
            </div>   
            <div>
                <Link>명예의 전당</Link>
            </div>   
        </section>
        </>
    )
}