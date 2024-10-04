export default function Log({turns}) {
    // console.log(
    //     turns,
    //     "from log"
    // );
    return <ol id="log">
        {turns.map((turn) => (
                // console.log(turn, "from Log"),
            <li key={`${turn.square.col}${turn.square.row}`}>
                
                {turn.player} selected {turn.square.row},{turn.square.col}
                 {/* for maping i writeen that */}
            </li>
        ))}
    </ol>
}
