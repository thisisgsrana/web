const obj = {
    ...(true) && {someprop: 42},
    ...(false) && {nonprop: "foo"},
    ...({}) && {tricky: "hello"},
  }
  
  console.log(obj);