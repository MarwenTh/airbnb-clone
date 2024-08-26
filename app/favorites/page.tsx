import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListing from "../actions/getFavoriteListing";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListing();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites"
          subtitle="You have no favorites yet."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
