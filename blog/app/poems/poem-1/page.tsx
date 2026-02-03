import PoemCards from "./poem-cards";

const oceanPoems = [
  {
    title: "1",
    content: `Evelyn builds a tree
the size of brains
& scope of towers
w/ intricate windows
sans glass but w/ bars
so to let the birds in
/ keep the flood out.`,
    actionImage: "/img/37-370475_free-png-download-spider-web-png-images-background.png"
  },
  {
    title: "2",
    content: `Evelyn builds a tree
the size of brains
& scope of towers
w/ intricate windows
sans glass but w/ bars
so to let the birds in
/ keep the flood out.`,
    actionImage: "/img/37-370475_free-png-download-spider-web-png-images-background.png"
  },
  {
    title: "3",
    content: `Evelyn builds a tree
the size of brains
& scope of towers
w/ intricate windows
sans glass but w/ bars
so to let the birds in
/ keep the flood out.`,
    actionImage: "/img/37-370475_free-png-download-spider-web-png-images-background.png"
  },
  {
    title: "4",
    content: `Evelyn builds a tree
the size of brains
& scope of towers
w/ intricate windows
sans glass but w/ bars
so to let the birds in
/ keep the flood out.`,
    actionImage: "/img/37-370475_free-png-download-spider-web-png-images-background.png"
  },
  {
    title: "5",
    content: `Evelyn builds a tree
the size of brains
& scope of towers
w/ intricate windows
sans glass but w/ bars
so to let the birds in
/ keep the flood out.`,
    actionImage: "/img/37-370475_free-png-download-spider-web-png-images-background.png"
  },
];

// Generate random rotations on the server
const rotations = oceanPoems.map(() => {
  const cardSpin = Math.floor(Math.random() * 41); // 0-40
  const textOffset = Math.floor(Math.random() * 6); // 0-5
  return {
    cardSpin,
    textSpin: -(cardSpin - textOffset),
  };
});

export default function Poem1() {
  return (
    <div className="relative w-full overflow-hidden min-h-[calc(100dvh-6rem)] lg:min-h-[calc(100dvh-10rem)]">
      <div className="absolute inset-0 opacity-40 -mx-12 -mb-12">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/img/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3Vwd2s0NzY5NjM4Mi13aWtpbWVkaWEtaW1hZ2Uta293cnQwNTMuanBn.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sludge-100 to-plum-900 mix-blend-multiply" />
      </div>
      <div
        className="absolute inset-x-0 top-0 h-32 -mx-12 -mb-12 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, var(--background) 0%, transparent 100%)',
        }}
      />
      <PoemCards poems={oceanPoems} rotations={rotations} />
    </div>
  );
}
