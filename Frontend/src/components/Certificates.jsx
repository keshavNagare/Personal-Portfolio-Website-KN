import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";

const Certificates = () => {
  const certificateList = [
    {
      title: "C++ Course",
      issuer: "GeeksForGeeks",
      date: "Aug 2025",
      fileId: "1RPpmR9lvVKC75tyPZ4GJ2IBMyWLDEKOy",
    },
    {
      title: "Problem Solving [DSA]",
      issuer: "HackerRank",
      date: "Aug 2025",
      fileId: "1QGKsQPeKcQsR81zi-_j9s9Urz3SVINv9",
    },
    {
      title: "Problem Solving [DSA]",
      issuer: "sololearn",
      date: "Aug 2025",
      fileId: "1yDhXSyQpCzkc6AgB2bqAvv539BUZoSh_",
    },
    {
      title: "MERN Stack ",
      issuer: "Sumago Infotech Pvt. Ltd.",
      date: "Feb 2025",
      fileId: "1_cs4-4IczgqikPtarsBM1Qt6p3oO7X0M",
    },
    {
      title: "Frontend101 - Enhanced Training Program",
      issuer: "Infrings Technologies Pvt. Ltd.",
      date: "Oct 2023",
      fileId: "1EmOeKUenotZ3AeIXG86MNRgCZAapIZYz",
    },
  ];

  return (
    <div className="About pb-[0px] sm:pb-[60px]">
      <div className="text-center pt-[60px] pb-[65px] xs:pt-[56px] md:pt-[82px]">
        <p className={`${styles.sectionHeadText}`}>Certificates</p>
      </div>

      <div className="certificates-container backdrop-blur-[1px] p-[1rem] xs:p-[2rem]">
        <h1 className="page-title text-[1.5rem] sm:text-[1.6rem] md:text-[1.85rem]">
          My Certificates
        </h1>
        <div className="certificates-grid">
          {certificateList.map((cert, index) => (
            <div className="card" key={index}>
              <h2 className="text-[1rem] sm:text-[1.2rem] md:text-[1.2rem]">
                <b>{cert.title}</b>
              </h2>
              <hr />
              <br />
              <p className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.2rem]">
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.2rem]">
                <strong>Date:</strong> {cert.date}
              </p>

              <div className="pdf-frame">
                <iframe
                  title={cert.title}
                  src={`https://drive.google.com/file/d/${cert.fileId}/preview`}
                  width="100%"
                  height="250px"
                  allow="autoplay"
                  style={{
                    border: "none",
                    overflow: "none",
                  }}
                ></iframe>
              </div>

              <div className="actions flex flex-col gap-2 xs:flex-row">
                <a
                  href={`https://drive.google.com/uc?export=download&id=${cert.fileId}`}
                  download
                >
                  ⬇️ Download
                </a>
                <a
                  href={`https://drive.google.com/file/d/${cert.fileId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔍 Full View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
