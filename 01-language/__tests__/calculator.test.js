function add(x,y) {
    function parseArg(n){
        if (Array.isArray(n)){
            let result = 0;
            for (let i = 0; i < n.length; i++){
                result += parseArg(n[i])
            }
            return result
        }
        if (typeof n === 'function') return parseArg(n())
        return isNaN(n) ? 0 : parseInt(n)
    }

    /* 
        let result = 0;
        for (let i = 0; i < arguments.length; i++){
            result += parseArg(arguments[i])
        } 
    */
    return parseArg(arr)
}

test("add(10,20) => 30", () => {
    expect(add(10,20)).toBe(30)
})

test("add(10,'20') => 30", () => {
    let expected = 30
    let actual = add(10, "20");
    expect(actual).toBe(expected)
})

test("add(10, 'abc') => 10", () => {
    let expected = 10
    let actual = add(10, "abc");
    expect(actual).toBe(expected)
})

test("add(10) => 10", () => {
    let expected = 10
    let actual = add(10);
    expect(actual).toBe(expected)
})


test("add(10,20,30,40,50) => 150", () => {
    let expected = 150
    let actual = add(10, 20, 30, 40, 50);
    expect(actual).toBe(expected)
})


test("add([10,20],[30,40]) => 100", () => {
    let expected = 100
    let actual = add([10,20],[30,40])
    expect(actual).toBe(expected)
})

test("add([10, '20'], [30, 40]) => 100", () => {
    let expected = 100
    let actual = add([10, '20'], [30, 40])
    expect(actual).toBe(expected)
})

test("add([10, '20'], [30, 'abc']) => 60;", () => {
    let expected = add([10, "20"], [30, "abc"]);
    let actual = 60
    expect(actual).toBe(expected)
})

test("add([10, '20'], [[30, 'abc'],40]) => 100", () => {
    let expected = 100
    let actual = add([10, '20'], [[30, 'abc'],40])
    expect(actual).toBe(expected)
})

test("add(function(){ return 10;}, function(){ return 20;})", () => {
    let expected = 30
    let actual = add(function(){ return 10;}, function(){ return 20;})
    expect(actual).toBe(expected)
})


test("add(function(){ return [10,20];}, function(){ return [30,'40'];}) => 100", () => {
    let expected = 100
    let actual = add(function(){ return [10,20];}, function(){ return [30,'40'];})
    expect(actual).toBe(expected)
})
test("add([function(){ return [10,20];}, function(){ return [30,'40'];}])", () => {
    let expected = 100
    let actual = add([function(){ return [10,20];}, function(){ return [30,'40'];}])
    expect(actual).toBe(expected)
})
