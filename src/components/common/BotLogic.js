export const botMove = (cells, winOptions, makeMove, players) => {
    debugger
    for (let i = 0; i <winOptions.length; i++) {
        let [a, b, c] = winOptions[i];
        if (cells[a] === ' ' || cells[a] === players.secondPlayer.item) {
            if (cells[b] === ' ' || cells[b] === players.secondPlayer.item) {
                if (cells[c] === ' ' || cells[c] === players.secondPlayer.item) {
                    if (cells[a] === ' ') {
                        return makeMove(a)
                    } else if (cells[b] === ' ') {
                        return makeMove(b)
                    } else {
                        return makeMove(c)
                    }
                }
            }
        }
    }
    makeMove(cells.indexOf(' '))
    return true
}