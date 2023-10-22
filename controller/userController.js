const user = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

function login(request, response) {
    const { username, password } = request.body;
    const allowed = user.some((item) => {
        return item.username == username && item.password == password;
    });
    if (allowed) {
        response.status(200);
        response.send("Login Successful");
    } else {
        response.status(401);
        response.send("Login Failed");
    }
}

function Register(request, response) {
    const { username, email, password, name } = request.body;
    if (user.some((item) => item.username == username || item.email == email)) {
        response.status(403);
        return response.send("User already exists!");
    }
    let index = user[user.length - 1].id + 1;
    let newUser = {
        id: index,
        username: username,
        email: email,
        password: password,
        name: name,
    };
    user.push(newUser);
    console.log(user);
    res.status(200);
    res.send("User created.");

}

module.exports = { login, Register };