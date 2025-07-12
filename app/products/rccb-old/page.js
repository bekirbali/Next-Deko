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
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* Left side: RCCB main image */}
          <div className="flex-shrink-0 flex justify-center items-start md:w-1/2">
            <Image
              src="/assets/images/products/rccb.jpg"
              alt="RCCB Main Image"
              width={700}
              height={350}
              className="object-contain rounded shadow-lg"
            />
          </div>
          {/* Right side: Description */}
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Function</h2>
            <p className="mb-4">
              A residual current circuit breaker, residual current circuit
              breaker, or earth fault circuit breaker is a device that quickly
              interrupts an electrical circuit to prevent serious damage from an
              ongoing electric shock. In addition to providing control of
              electrical circuits, it protects people against indirect and
              direct contact. It also protects installations against fire
              hazards caused by insulation faults. Residual current circuit
              breakers; It is used in housing, tertiary sector and industry.
              RCCB residual current circuit breakers are manufactured in
              accordance with EN 61008-1 standards.
            </p>
            <h3 className="text-xl font-semibold mb-2">Detection & Classes</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <b>Detection:</b> detectable waveform
              </li>
              <li>
                <b>AC Class:</b> Tripping is provided for slowly increasing
                sinusoidal AC residual currents.
              </li>
              <li>
                <b>Class A:</b> Trip is provided for suddenly applied or slowly
                increasing sinusoidal AC residual currents and pulsed DC
                residual currents.
              </li>
              <li>
                <b>S, G/Si Class:</b> The tripping is provided not only for
                sinusoidal AC residual currents, but also for spiked or slowly
                increasing pulsed DC residual currents. S, G/Si type, filtered
                against spurious tripping caused by harmonics and transients.
                With this high immunity obtained by the effect of 8/20us surge
                3000A, the RCCB will still be in a stable state.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Opening Sensitivity</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                10mA – available for sensitive device leakage protection and
                bathroom use.
              </li>
              <li>
                30mA – provides additional protection against direct contact.
              </li>
              <li>
                100mA – coordinated with the grounding system according to the
                formula IΔn &lt;50/R to protect against indirect contacts
              </li>
              <li>
                300mA/500mA – provides protection against indirect contacts and
                fire hazard.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Opening Time</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <b>Momentary:</b> Provides instantaneous power-on (without time
                delay).
              </li>
              <li>
                <b>Short time delay:</b> It provides at least 10ms any trip.
              </li>
              <li>
                <b>Selective:</b> It provides full separation with a
                non-selective RCD located downstream.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">RCCB Series</h3>
            <ul className="mb-4">
              <li className="mb-1">DEKO RCA Series 6 kA</li>
              <li className="mb-1">DEKO RCB Series 10 kA</li>
              <li className="mb-1">DEKO RCK Series B TYPE 10 kA</li>
            </ul>
          </div>
        </div>
        {/* Technical images section */}
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4 text-center mx-auto">RCCB</h1>
          <p className="mb-4 font-semibold !text-left">
            RCCB (Residual Current Circuit Breaker)technical data.
          </p>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/products/rccb/rccb2.jpg"
              alt="MCB Technical Data"
              width={1000}
              height={1000}
              className="object-contain rounded"
            />
            <Image
              src="/assets/images/products/rccb/rccb3.jpg"
              alt="MCB Technical Data"
              width={1000}
              height={1000}
              className="object-contain rounded"
            />
            <Image
              src="/assets/images/products/rccb/rccb4.jpg"
              alt="MCB Technical Data"
              width={1000}
              height={1000}
              className="object-contain rounded"
            />
            <Image
              src="/assets/images/products/rccb/rccb5.jpg"
              alt="MCB Technical Data"
              width={1000}
              height={1000}
              className="object-contain rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
