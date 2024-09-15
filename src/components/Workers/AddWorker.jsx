import Card from "../UI/Card";
const AddWorker = () => {
  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2">
        <label htmlFor="name" className="font-medium">
          Çalışan ismi
        </label>
        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="text"
          placeholder="Çalışan ismi yazınız."
          id="name"
        />
        <label htmlFor="salary" className="font-medium">
          Maaş miktarı
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Maaş miktarı yazınız."
          id="salary"
        />
        <button className="p-2 text-lg bg-teal-700 text-white mt-2">
          Ekle
        </button>
      </form>
    </Card>
  );
};

export default AddWorker;
