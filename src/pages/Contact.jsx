import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    toast.success("Message sent!", {
      position: "bottom-right",
    });
    reset();
  };

  return (
    <div className="contact w-full px-[4vw] bg-[#fbf6ec] pt-[2vw] grid lg:pt-[1vw] lg:h-[90vh]">
      <div className="heading h-fit py-0 lg:px-[2vw]  lg:flex lg:flex-col lg:justify-between">
        <h1 className="text-[14vw] text-left text-black my-[5vw] mb-[8vw] lg:text-[6vw] lg:font-light lg:tracking-[-0.3vw] lg:my-[2vw]">
          Get in touch
        </h1>
      </div>
      <div className="form flex items-center justify-center">
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="w-full max-w-[600px] bg-[#fae6bf] p-4 sm:p-6 lg:p-[2vw] rounded-md"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div className="w-full">
              <h4 className="text-base sm:text-lg lg:text-[1.2vw] mb-2">
                Your Name
              </h4>
              <input
                {...register("name", {
                  required: "This place can not be empty!",
                })}
                type="text"
                placeholder="Your name"
                className="w-full bg-white outline-none px-3 py-2 rounded"
              />
              <small className="text-red-500">{errors?.name?.message}</small>
            </div>

            <div className="w-full">
              <h4 className="text-base sm:text-lg lg:text-[1.2vw] mb-2">
                Email Address
              </h4>
              <input
                {...register("email", {
                  required: "This place can not be empty!",
                })}
                type="email"
                placeholder="Your email address"
                className="w-full bg-white outline-none px-3 py-2 rounded"
              />
              <small className="text-red-500">{errors?.email?.message}</small>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-base sm:text-lg lg:text-[1.2vw] mb-2">
              Message
            </h4>
            <textarea
              {...register("description", {
                required: "This place can not be empty!",
              })}
              placeholder="Write something..."
              className="w-full bg-white outline-none px-3 py-2 rounded"
              rows="5"
            ></textarea>
            <small className="text-red-500">
              {errors?.description?.message}
            </small>
          </div>

          <button className="mt-4 bg-[#F56607] text-white w-full py-2 rounded hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
      <div className="details mt-10 mb-5 lg:px-[2vw] lg:flex lg:flex-col lg:justify-between">
        <div className="mb-[1vw] lg:mb-0">
          <h5 className="text-[4vw] opacity-65 text-black mb-[1vw] lg:text-[1vw] lg:mb-[0.3vw]">
            Email:
          </h5>
          <h4 className="m-0 text-[5vw] leading-none mb-[5vw] w-[95%] lg:text-[1.4vw] lg:mb-[1vw] lg:w-[55%]">
            Recipeinminute@gmail.com
          </h4>
        </div>
        <div className="mb-[1vw] lg:mb-0">
          <h5 className="text-[4vw] opacity-65 text-black mb-[1vw] lg:text-[1vw] lg:mb-[0.3vw]">
            Phone:
          </h5>
          <h4 className="m-0 text-[5vw] leading-none mb-[5vw] w-[95%] lg:text-[1.4vw] lg:mb-[1vw] lg:w-[55%]">
            +91 9909909989
          </h4>
        </div>
        <div className="mb-[1vw] lg:mb-0">
          <h5 className="text-[4vw] opacity-65 text-black mb-[1vw] lg:text-[1vw] lg:mb-[0.3vw]">
            Address:
          </h5>
          <h4 className="m-0 text-[5vw] leading-none mb-[5vw] w-[95%] capitalize lg:text-[1.4vw] lg:mb-[1vw] lg:w-[55%]">
            123 innovation avenue, suite 456 tech district, west bengal,{" "}
            <br className="hidden lg:inline" />
            india
          </h4>
        </div>
        <div className="lg:mb-0">
          <h5 className="text-[4vw] opacity-65 text-black mb-[1vw] lg:text-[1vw] lg:mb-[0.3vw]">
            Follow us:
          </h5>
          <div className="flex gap-[2vw] lg:gap-[0.8vw] lg:mb-[1vw]">
            <i className="ri-instagram-fill bg-[#f56607] text-white rounded-full text-[5vw] h-[8vw] w-[8vw] flex justify-center items-center mt-[1vw] lg:text-[1.3vw] lg:h-[2vw] lg:w-[2vw] lg:mt-0"></i>
            <i className="ri-facebook-circle-fill bg-[#f56607] text-white rounded-full text-[5vw] h-[8vw] w-[8vw] flex justify-center items-center mt-[1vw] lg:text-[1.3vw] lg:h-[2vw] lg:w-[2vw] lg:mt-0"></i>
            <i className="ri-linkedin-box-fill bg-[#f56607] text-white rounded-full text-[5vw] h-[8vw] w-[8vw] flex justify-center items-center mt-[1vw] lg:text-[1.3vw] lg:h-[2vw] lg:w-[2vw] lg:mt-0"></i>
            <i className="ri-twitter-x-fill bg-[#f56607] text-white rounded-full text-[5vw] h-[8vw] w-[8vw] flex justify-center items-center mt-[1vw] lg:text-[1.3vw] lg:h-[2vw] lg:w-[2vw] lg:mt-0"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
