import React from 'react';

const Story = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/pastor.png"
              width={400}
              height={400}
              alt="Pastor Chibuzo Nwanju"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">
              The Vision of Pastor Chibuzo Nwanju
            </h3>
            <p className="text-slate-600">
              The Adjumani Project was birthed out of a deep concern for the
              health and spiritual well-being of the people in Adjumani, Uganda,
              a region overwhelmed by hardship. In 2022, during a crusade
              supported by God’s Family Global Network, Pastor Chibuzo Nwanju
              witnessed the cries of a people in desperate need. The region’s
              health facilities were overrun, leaving families dying from
              preventable diseases such as malaria and diabetes due to a lack of
              medical supplies and resources. Additionally, the influx of South
              Sudanese refugees fleeing civil war had created an unsustainable
              strain on the local infrastructure, plunging the community into
              extreme poverty and despair.
            </p>
            <p className="text-slate-600">
              Adjumani has become a refuge for war-torn families, yet it remains
              a region burdened by physical, emotional, and spiritual wounds.
              Many live without access to basic medical care, and countless
              souls remain unreached with the Gospel of Jesus Christ. The Bridge
              Kingdom Access Network has embraced this challenge by launching
              the Adjumani Project. Its goal is to bring light to this dark
              region through the construction of a Soul Center, which will
              provide healthcare, education, and spiritual empowerment to
              restore the faith of this bleeding region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
