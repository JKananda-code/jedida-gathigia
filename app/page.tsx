// app/tribute/page.tsx
import React from "react";

export default function TributePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto py-16 px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-violet-900">
            A Tribute to a Life of Love and Legacy
          </h1>
          <p className="mt-4 text-lg font-bold text-gray-600 italic">
            In Loving Memory of Mum
          </p>
        </header>

        {/* Body */}
        <article className="space-y-6 leading-relaxed">
          <p>
            Dear family, friends, and loved ones,
          </p>

          <p>
            Today, I stand before you with a heavy heart, yet grateful to have
            had the privilege to call this incredible woman my mum. As I reflect
            on her life, I am reminded of the profound impact she had on our
            family and community.
          </p>

          <p>
            Mum's love was unconditional, unwavering, and all-encompassing. She
            loved Dad with a passion that inspired us all, and her love for her
            children was equal and unrelenting. I was blessed to have her in my
            life for the last eight years, and I witnessed firsthand her
            unwavering dedication to our family.
          </p>

          <p>
            In these past eight years, Mum's love and support were instrumental
            in my son Elijah's journey as he completed his higher education and
            pursued his passion. Her selflessness and encouragement gave him the
            strength to persevere, and we celebrate his achievements today as a
            testament to her unwavering commitment to our family.
          </p>

          <p>
            Beyond our family, Mum's impact extended far and wide. Her tireless
            efforts to build and strengthen our community have left an indelible
            mark on us all. The outpouring of love and support we have received
            today is a testament to her dedication and the lives she touched.
          </p>

          <p>
            I will greatly miss our special bond, Mum. I will miss the times you
            fondly called me <span className="font-semibold">"Wakarobia"</span> and I
            respectfully and affectionately called you <span className="font-semibold">"Wakiranga"</span>.
            Those moments are precious to me, and I will cherish them forever.
          </p>

          <p>
            I will never forget our last conversation on your hospital bed. I told
            you, "Mum, since I have recently moved out of home, you should be visiting
            me very soon at my new place accompanied by Elijah." She smiled and blessed me,
            and wished me success in all my future endeavors. That smile and those words of 
            blessing, will stay with me forever.
          </p>

          <p>
            As we bid you farewell, I take comfort in the lessons you taught
            us all along: the importance of love, kindness, and community participation.
            Your legacy will live on through us, inspiring us to live lives of purpose,
            compassion, and service to others.
          </p>

          <p className="font-semibold text-gray-700">
            Rest in peace, Mum. We love you and will miss you dearly.
          </p>

          <p className="mt-8 text-right italic">With love,<br />Mercy Elijah Kimotho</p>
        </article>
      </div>
    </main>
  );
}
