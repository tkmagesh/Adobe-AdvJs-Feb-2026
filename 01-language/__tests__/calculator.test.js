function add(x,y) {
    return x + y
}

test("add(10,20) => 30", () => {
    expect(add(10,20)).toBe(30)
})

test("add(10,20)", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add(10,'20')", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add(10, 'abc')", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add(10)", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add(10,20,30,40,50)", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add([10,20],[30,40])", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add([10, '20'], [30, 40]);", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add([10, '20'], [30, 'abc']);", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add([10, '20'], [[30, 'abc'],40]);", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add(function(){ return 10;}, function(){ return 20;})", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add(function(){ return [10,20];}, function(){ return [30,'40'];})", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
test("add([function(){ return [10,20];}, function(){ return [30,'40'];}])", () => {
    /* let expected = 
    let actual =  */
    expect(actual).toBe(expected)
})
