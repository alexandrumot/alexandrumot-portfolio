function Contact(props) {
  return (
    <section className="px-10 ">
      <div className="py-5 mt-96 flex flex-col items-center gap-20">
        <h3 ref={props.refs[2]} className="text-3xl py-1 dark:text-gray-200">Contact</h3>
        <hr className="mb-6 rounded-xl h-1 w-5/6 bg-gray-200 border-0 dark:bg-gray-700" />
        {/* <Image src={Avatar} alt="Avatar" className="rounded-full w-72 md:w-96"/> */}
        <p className="text-lg py-2 leading-8 text-gray-400 md:text-xl">
          Reach me out: (icons)
        </p>
      </div>
    </section>
  );
}

export default Contact;