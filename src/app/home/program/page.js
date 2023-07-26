import PriceCard from "../../../components/priceCard";
import PriceCardsm from "../../../components/priceCardsm";
function programPage() {
  return (
    <>
      <PriceCard />
      <div className="w-full flex justify-center items-center">
        <div className="flex w-fit sm:w-full justify-around p-5 flex-col sm:flex-row gap-3">
          <PriceCardsm />
          <PriceCardsm />
          <PriceCardsm />
        </div>
      </div>
    </>
  );
}

export default programPage;
