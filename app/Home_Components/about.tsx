export default function About() {
  return (
    /* Main Hook*/
    <div className="flex flex-col justify-center items-center h-80 md:h-100 px-4"> {/* Container Div to center the content vertically and horizontally */}
      <h1 className="text-center font-bold leading-tight text-[2.00em] text-[2.40em] md:text-[2.90em]"> {/* Block Affecting Everything in the text*/}
        {/* First Line */}
        <span className="block">
          Where
          {" "}
          <span className="inline-block whitespace-nowrap text-[#c41230] underline decoration-[#c41230] decoration-3 underline-offset-12 bg-[rgba(196,18,48,0.05)]">
            diverse talent
          </span>
        </span>

        {/* Second Line */}
        <span className="block">builds community</span>

        {/* Third Line */}
        <span className="block">
          and
          {" "}
          <span className="inline-block whitespace-nowrap text-[#c41230] underline decoration-[#c41230] decoration-3 underline-offset-12 bg-[rgba(196,18,48,0.05)]">
            thrives
          </span>
          .
        </span>
        {/*End*/}
    </h1>

    </div>
  );
}
