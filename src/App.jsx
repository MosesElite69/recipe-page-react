
import Footer from "./ui/Footer";

export default function App() {
  return (
    <>
      <img
        src="/image-omelette.jpeg"
        alt="omelette"
        height={440}
        width={400}
      />
      <main className="w-[80%] mx-auto ">
        <h1 className="text-[30px] text-left font-bold text-darkCharcoal ">
          Simple Omelette Recipe
        </h1>

        <header className="m-3 text-[14px]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </header>
        <section className="border-solid border bg-roseWhite p-3 rounded-md  ">
          <h3 className="text-darkRaspberry text-[20px] mb-2">Preparation time</h3>
          <ul className="list-disc custom-list-disc pl-5 ">
            <li className="pl-3 m-1">
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li className="pl-3 m-1">
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li className="pl-3 m-1">
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>
        </section>
        <h2 className="text-nutmeg text-3xl m-2">Ingredients</h2>
        <ul className="list-disc m-2 p-2">
          <li className="m-1">2-3 large eggs</li>
          <li className="m-1">Salt, to taste</li>
          <li className="m-1">Pepper, to taste</li>
          <li className="m-1">1 tablespoon of butter or oil</li>
          <li className="m-1">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <hr />
        <h2 className="text-nutmeg text-3xl m-2">Instructions</h2>
        <ol className="list-decimal ml-[10px] p-2">
          <li className="my-2">
            <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk for a fluffier texture.
          </li>

          <li className="my-2">
            <strong>Heat the pan</strong>: Place a non-stick frying pan over
            medium heat and add butter or oil.
          </li>

          <li className="my-2">
            <strong>Cook the omelette</strong>: Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>

          <li className="my-2">
            <strong>Add fillings (optional)</strong>: When the eggs begin to set
            at the edges but are still slightly runny in the middle, sprinkle
            your chosen fillings over one half of the omelette.
          </li>

          <li className="my-2">
            <strong>Fold and serve</strong>: As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>

          <li className="my-2">
            <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
            if needed.
          </li>
        </ol>
        <hr />
        <h1>Nutrition</h1>

        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <section>Calories 277kcal Carbs 0g Protein 20g Fat 22g</section>
      </main>
      <Footer />
    </>
  );
}