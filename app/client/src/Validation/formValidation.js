import { create, test, enforce, only, warn, warn } from "vest";

const formValidation = create((data = {}, currentField) => {
  only(currentField);

  test("recipient", "Recipient is required", () => {
    enforce(data.recipient).isNotEmpty();
  });
  test("recipient", "Recipient is too short", () => {
    enforce(data.recipient).longerThan(2);
  });

  test("streetAddress", "Street address is required", () => {
    enforce(data["streetAddress"]).isNotEmpty();
  });

  test("suburb", "Suburb is required", () => {
    enforce(data["suburb"]).isNotEmpty();
  });

  test("state", "State is required", () => {
    enforce(data["state"]).isNotEmpty();
  });

  test("postcode", "Postcode is required", () => {
    enforce(data["postcode"]).isNotEmpty();
  });

  test("dateIssued", "Date issued more than 1 year ago", () => {
    // warn();
    // debugger
    // console.log(data.dateIssued)
    const dateIssued = new Date(data.dateIssued);
    const todayDate = new Date();

    // console.log(dateIssued.getTime() >= (todayDate.getTime() - 31536000730))
    
    enforce(dateIssued.getTime() >= (todayDate.getTime() - 31536000730)).isTruthy();
  });

  test("dateIssued", "Date must not be empty", () => {
    enforce(data['dateIssued']).isNotEmpty();
  });


  
//   skipWhen(
//     (res) => res.hasErrors("username"),
//     () => {
//       test.memo(
//         "username",
//         "Username already taken",
//         () => {
//           return doesUserExist(data.username);
//         },
//         [data.username]
//       );
//     }
//   );

  //   test("password", "Password is required", () => {
  //     enforce(data.password).isNotEmpty();
  //   });
  //   test("password", "Password is too short", () => {
  //     enforce(data.password).longerThan(2);
  //   });
  //   test("password", "Password is weak. maybe add a number", () => {
  //     warn();
  //     enforce(data.password).matches(/[0-9]/);
  //   });

  //   test("confirm", "Passwords do not match", () => {
  //     enforce(data.confirm).equals(data.password);
  //   });
=======
  test("dateIssued", "Date issued more than 1 year ago", () => {
    // warn();
    // debugger
    // console.log(data.dateIssued)
    const dateIssued = new Date(data.dateIssued);
    const todayDate = new Date();

    // console.log(dateIssued.getTime() >= (todayDate.getTime() - 31536000730))
    
    enforce(dateIssued.getTime() >= (todayDate.getTime() - 31536000730)).isTruthy();
  });

  test("dateIssued", "Date must not be empty", () => {
    enforce(data['dateIssued']).isNotEmpty();
  });

>>>>>>> 87ed3c1b85fe44c515671317a166a704d09fdee6

  //   test("tos", () => {
  //     enforce(data.tos).isTruthy();
  //   });
});

export default formValidation;

// async function doesUserExist(username) {
//   await wait(1000);

//   // fake taken username.
//   enforce(parseInt(btoa(username), 36) % 3).notEquals(0);
// }
