export const botMove = (cells, winOptions, players) => {

    for (let i = 0; i <winOptions.length; i++) {
        let [a, b, c] = winOptions[i];
        if (cells[a] === ' ' || cells[a] === players.secondPlayer.item) {
            if (cells[b] === ' ' || cells[b] === players.secondPlayer.item) {
                if (cells[c] === ' ' || cells[c] === players.secondPlayer.item) {
                    if (cells[a] === ' ') {
                        return a
                    } else if (cells[b] === ' ') {
                        return b
                    } else {
                        return c
                    }
                }
            }
        }
    }
    return cells.indexOf(' ')
}