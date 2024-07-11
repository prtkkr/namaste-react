const Contact = () => {
  return (
    <div className="p-4 text-center mx-auto">
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <form className="w-3/12 mx-auto flex flex-col align-middle">
        <input
          type="email"
          name="email"
          placeholder="email id"
          className="p-3 my-3 border-2 border-gray-200 rounded-lg"
        />
        <input
          type="text"
          name="username"
          placeholder="name"
          className="p-3 my-3 border-2 border-gray-200 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="message"
          rows={5}
          cols={50}
          className="p-3 my-3 border-2 border-gray-200 rounded-lg"
        ></textarea>
        <button className="my-3 bg-blue-500 text-white p-3 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
