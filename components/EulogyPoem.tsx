
import React from 'react';

const PoemText = `
Her love was steady, a guiding flame,
Unwavering devotion, a cherished name.
She blessed our days with kindness and grace,
A radiant smile, a warm embrace.

Through trials and triumphs, she stood so near,
Her voice of comfort, her presence dear.
She lifted Elijah, gave strength to strive,
Her spirit ensured our dreams survive.

Beyond our home, her care would flow,
A legacy of service all hearts still know.
Wakarobia, Wakiranga—bond so true,
Precious moments we’ll always renew.

Her final blessing, her gentle smile,
Will walk beside us each weary mile.
Though farewells weigh heavy, her love remains,
A timeless song through joy and pains.

Rest now, dear Mum, in peace above,
Forever remembered—a life of love.
`;

const EulogyPoem: React.FC = () => {
  // Split the poem into stanzas (paragraphs) for easier formatting
  const stanzas = PoemText.trim().split('\n\n').map(s => s.trim());

  return (
    // Outer container: centered, with some padding and a light background color
    <div className="flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Poem container: maximum width for readability, shadow, and rounded corners */}
      <div className="max-w-xl w-full bg-white p-8 md:p-12 shadow-xl rounded-lg border border-gray-200">
        
        {/* Title/Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-800 tracking-wider">
            🌹 A Poem for Mum 🌹
          </h1>
          <hr className="mt-4 w-1/4 mx-auto border-pink-400" />
          <p className="mt-2 text-md text-gray-500 font-sans italic">
            A Farewell of Love
          </p>
        </header>

        {/* Poem Body */}
        <article className="text-center font-serif text-lg text-gray-700 leading-relaxed">
          {stanzas.map((stanza, index) => (
            // Each stanza is rendered as a paragraph with vertical spacing
            <p key={index} className={`mb-6 whitespace-pre-line`}>
              {stanza}
            </p>
          ))}
        </article>

        {/* Footer/Closing */}
        <footer className="mt-10 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 font-sans">
            — Forever in Our Hearts —
          </p>
        </footer>
      </div>
    </div>
  );
};

export default EulogyPoem;
