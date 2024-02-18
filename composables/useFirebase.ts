import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// const auth = getAuth();

export const createUser = async (email: string, password: string) => {
  // Đăng kí người dùng mới
  const auth = getAuth();

  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  return credentials;
};

export const signInUser = async (email: string, password: string) => {
  // Đăng nhập người dùng hiện tại
  const auth = getAuth();

  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  return credentials;
};

export const initUser = async () => {
  // Đặt trình quan sát trạng thái xác thực và nhận dữ liệu người dùng
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
    } else {
      // User is signed out
      // ...
    }
  });
};

export const signOutUser = async () => {
  // Đăng xuất người dùng
  const auth = getAuth();
  const result = await auth.signOut();

  return result;
};
