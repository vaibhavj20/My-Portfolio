// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
//       <div className="max-w-3xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//           Dream. Build. Repeat.
//         </h2>
//         <p className="text-gray-300 mb-2 leading-relaxed text-lg">
//           I'm currently open to full-time opportunities, internships, and
//           freelance projects. If you're looking for passion, skills, and
//           creativity—guess what? You just found me!"
//         </p>

//         <div className="flex space-x-4 mt-5">
//           <a
//             href="mailto:your-email@example.com"
//             className="px-4 py-3 lg:px-6 lg:py-3 bg-maincolor text-black rounded-lg hover:bg-opacity-90 inline-flex items-center hover-target"
//           >
//             Drop a Message
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl relative">
        {/* Decorative background element */}
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-maincolor opacity-10 rounded-full blur-xl" />

        {/* Main content */}
        <div className="relative">
          <h2 className="text-2xl lg:text-4xl font-medium mb-6 ">
            Dream. <span className="text-maincolor">Build.</span> Repeat.
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
            I'm currently open to full-time opportunities, internships, and
            freelance projects. If you're looking for passion, skills, and
            creativity—guess what? You just found me!
          </p>

          {/* Contact action */}
          <div className="flex mt-8">
            <a
              href="mailto:vaibhavjamdhade2062001@gmail.com"
              className="px-6 py-3 bg-maincolor text-black rounded-lg hover:bg-opacity-90 inline-flex items-center justify-center hover-target"
            >
              Drop a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
