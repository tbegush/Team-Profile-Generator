const Employee = require("../lib/Employee.js");

test ("check to see if class returns object", () => {

const freshmeat = new Employee();

expect(typeof(freshmeat)).toBe("object");

})

test ("check to see if name is returned", () => {
const someName = "Elvis"
const newName = new Employee(someName);

expect(newName.name).toBe(someName);
}
)

test ("check to see if id is returned", () => {
    const someID = 55
    const newGuy = new Employee("Elvis", someID);
    
    expect(newGuy.id).toBe(someID);
    }
    )
