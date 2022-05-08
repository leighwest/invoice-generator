import { create, test, enforce, only } from "vest";

const formValidation = create((data = {}, currentField) => {
  only(currentField);

  test("recipient", "Recipient is required", () => {
    enforce(data.recipient).isNotEmpty();
  });
  test("recipient", "Recipient is too short", () => {
    enforce(data.recipient).longerThan(2);
  });

  test("streetAddress", "Street address is required", () => {
    enforce(data['streetAddress']).isNotEmpty();
  });

  test("suburb", "Suburb is required", () => {
    enforce(data['suburb']).isNotEmpty();
  });

  test("postcode", "Postcode is required", () => {
    enforce(data['postcode']).isNotEmpty();
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
