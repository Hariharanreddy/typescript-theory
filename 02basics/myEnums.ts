//By default if you are not specifying,
// 0, 1, 2, 3, 4 ... are assigned

enum SeatChoice {
    AISLE = "aisle",        //default 0
    MIDDLE = 3,             //default 1 and so on
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE