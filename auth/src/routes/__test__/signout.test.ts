import request from "supertest";
import { app } from "../../app";

it("clears the cookie after signing out", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com", password: "password" })
    .expect(201);

  await request(app).post("/api/users/signout").send({}).expect(200);
});
