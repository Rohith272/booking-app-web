import CreateOrganizerForm from "./form";

const CreateOrganizerPage = () => {
  return (
    <main>
      <div className="">
        <h1 className="py-8 text-center text-xl font-semibold">
          Create Organizer
        </h1>
        <div className="max-w-screen-lg mx-auto">
          <CreateOrganizerForm />
        </div>
      </div>
    </main>
  );
};

export default CreateOrganizerPage;
