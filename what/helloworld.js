// console.log("helloworld");
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter"
};
var todo2 = updateTodo(todo1, {
    title: "are you a trash?",
    description: "throw out trash"
});
var todo3 = updateTodo(todo1, {
    title: "TODO # 3 ",
    description: "Be a strong leader"
});
console.log(todo3);
