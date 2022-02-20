import React from "react";

function ContactForm() {
  return (
    <div>
      <h1 className="p-2">Drop us a line</h1>
      <hr />

      <form action="" className="p-4 lg:px-8">
        <div className=" flex flex-col space-y-2 mt-4">
          <label>first name</label>
          <input type="text" className="border p-2 shadow" />
        </div>
        <div className=" flex flex-col space-y-2 mt-4">
          <label>phone</label>
          <input type="text" className="border p-2 shadow" />
        </div>
        <div className=" flex flex-col space-y-2 mt-4">
          <label>email</label>
          <input type="text" className="border p-2 shadow" />
        </div>
        <div className=" flex flex-col space-y-2 mt-4">
          <label>message</label>
          <textarea type="text" rows="8" className="border p-2 shadow" />
        </div>
        <input
          type="submit"
          value="SUBMIT"
          className="btn-primary rounded-md my-8"
        />
      </form>
    </div>
  );
}

export default ContactForm;
