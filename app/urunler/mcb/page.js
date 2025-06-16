import Image from "next/image";
import Link from "next/link";

export default function MCB() {
  return (
    <div>
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/products/urunler.jpg"
          alt="Security Automation Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Products
          </h1>
        </div>
      </div>
      {/* MCB Product Info Section */}
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row gap-8 mt-10 p-6">
        {/* Product Image */}
        <div className="flex-shrink-0 flex justify-center items-start md:w-1/2">
          <Image
            src="/assets/images/products/mcb.jpg"
            alt="DEKO MCB Circuit Breaker"
            width={700}
            height={350}
            className="object-contain rounded"
          />
        </div>
        {/* Product Description */}
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Function</h2>
          <p className="mb-4">
            An MCB circuit breaker is an automatically operating electrical
            switch designed to protect an electrical circuit from damage caused
            by overcurrent caused by overload or short circuit. MCB it is used
            for purposes such as protection of circuits against short-circuit
            currents, protection of circuits against overload currents,
            switches, isolation. It is also suitable for use in household
            installations, commercial and industrial electrical distribution
            systems. MCB circuit breakers are manufactured in accordance with EN
            60898-1 standards.
          </p>
          <h3 className="text-xl font-semibold mb-2">Election</h3>
          <p className="mb-4">
            Technical data of the network at the point under consideration: The
            short-circuit current at the installation point of the circuit
            breaker must always be less than the breaking capacity of this
            device.
          </p>
          <h3 className="text-xl font-semibold mb-2">Opening curves:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <b>B-curve (3–5 In)</b> provides protection for people and long
              cables in TN and IT systems.
            </li>
            <li>
              <b>C curve (5–10In)</b> provides protection for resistive and
              inductive loads with low inrush current.
            </li>
            <li>
              <b>D curve (10–14In)</b> circuits feeding loads with high inrush
              current at circuit closure (LV/LV transformers, fault lamps)
            </li>
          </ul>
          <p>Provides protection for</p>
          {/* Temperature Drops and MCB Series */}
          <h3 className="text-xl font-semibold mt-8 mb-2">Temperature Drops</h3>
          <p className="mb-4">
            The maximum current allowed in a circuit breaker depends on the
            ambient temperature in which the circuit breaker is placed. Ambient
            temperature is the temperature inside the switchboard or switchboard
            where the circuit breakers are installed. Reference temperature is
            30°C
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-2">MCB Series</h3>
          <ul className="mb-4">
            <li className="mb-1">DEKO MBC-3 Series 4.5 kA</li>
            <li className="mb-1">DEKO MBC-6 Series 6 kA</li>
            <li className="mb-1">DEKO MBC-10 Series S 10 kA</li>
            <li className="mb-1">DEKO MBC-H Series 10 kA</li>
            <li className="mb-1">DEKO MBC-DPN Series 6 kA</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-center mx-auto">MCB</h1>
        <p className="mb-4 font-semibold">
          MCB (Miniature Circuit Breaker)technical data.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/assets/images/products/mcb/mcb5.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
          <Image
            src="/assets/images/products/mcb/mcb6.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
          <Image
            src="/assets/images/products/mcb/mcb7.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
          <Image
            src="/assets/images/products/mcb/mcb8.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
          <Image
            src="/assets/images/products/mcb/mcb9.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
          <Image
            src="/assets/images/products/mcb/mcb10.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
          <Image
            src="/assets/images/products/mcb/mcb11.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
          <Image
            src="/assets/images/products/mcb/mcb12.jpg"
            alt="MCB Technical Data"
            width={1000}
            height={1000}
            className="object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
}
