"use client";
import { useState, useEffect } from "react";

const ProtectedEmail = ({
  encodedEmail,
  className = "",
  showIcon = false,
  method = "css",
}) => {
  // Initial decode to prevent hydration mismatch
  const getInitialEmail = () => {
    try {
      return atob(encodedEmail);
    } catch (error) {
      console.error("Error decoding email:", error);
      return "İletişim";
    }
  };

  const [email, setEmail] = useState(getInitialEmail);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Re-decode on client side to ensure consistency
    try {
      const decodedEmail = atob(encodedEmail);
      setEmail(decodedEmail);
    } catch (error) {
      console.error("Error decoding email:", error);
      setEmail("İletişim");
    }
  }, [encodedEmail]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      window.location.href = `mailto:${email}`;
    }
  };

  // CSS Reverse method - E-posta adresini ters çevir
  const getReversedEmail = () => {
    return email.split("").reverse().join("");
  };

  // Unicode method - Karakterleri Unicode escape olarak kodla
  const getUnicodeEmail = () => {
    return email
      .split("")
      .map((char) => `&#${char.charCodeAt(0)};`)
      .join("");
  };

  // JavaScript pieces method - Parça parça birleştir
  const getEmailPieces = () => {
    if (!email.includes("@")) return email;
    const [local, domain] = email.split("@");
    return { local, domain };
  };

  if (method === "css") {
    return (
      <span className="inline-flex items-center">
        {showIcon && (
          <svg
            className="w-5 h-5 text-red-300 flex-shrink-0 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        )}
        <a
          href={`mailto:${email}`}
          onClick={handleEmailClick}
          className={`hover:underline cursor-pointer ${className}`}
          title={`E-posta gönder: ${email}`}
          style={{
            unicodeBidi: "bidi-override",
            direction: "rtl",
            display: "inline-block",
          }}
        >
          {isClient ? getReversedEmail() : email.split("").reverse().join("")}
        </a>
      </span>
    );
  }

  if (method === "unicode") {
    return (
      <span className="inline-flex items-center">
        {showIcon && (
          <svg
            className="w-5 h-5 text-red-300 flex-shrink-0 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        )}
        <a
          href={`mailto:${email}`}
          onClick={handleEmailClick}
          className={`hover:underline cursor-pointer ${className}`}
          title={`E-posta gönder: ${email}`}
          dangerouslySetInnerHTML={{
            __html: isClient ? getUnicodeEmail() : email,
          }}
        />
      </span>
    );
  }

  if (method === "pieces") {
    const pieces = getEmailPieces();
    return (
      <span className="inline-flex items-center">
        {showIcon && (
          <svg
            className="w-5 h-5 text-red-300 flex-shrink-0 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        )}
        <a
          href={`mailto:${email}`}
          onClick={handleEmailClick}
          className={`hover:underline cursor-pointer ${className}`}
          title={`E-posta gönder: ${email}`}
        >
          {isClient ? (
            <>
              <span data-user={pieces.local}></span>
              <span>@</span>
              <span data-domain={pieces.domain}></span>
            </>
          ) : (
            email
          )}
        </a>
      </span>
    );
  }

  // Fallback - normal görünüm
  return (
    <span className="inline-flex items-center">
      {showIcon && (
        <svg
          className="w-5 h-5 text-red-300 flex-shrink-0 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )}
      <a
        href={`mailto:${email}`}
        onClick={handleEmailClick}
        className={`hover:underline cursor-pointer ${className}`}
        title={`E-posta gönder: ${email}`}
      >
        {isClient ? email : email}
      </a>
    </span>
  );
};

export default ProtectedEmail;
