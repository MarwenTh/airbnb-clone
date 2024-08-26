"use client";
import React, { FC, useCallback, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservations, SafeUser } from "../types";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

type Props = {
  reservations: SafeReservations[] | [];
  currentUser: SafeUser | null;
};

const ReservationsClient: FC<Props> = ({ reservations, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled successfully.");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Failed to cancel reservation.");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading
        title="My Reservations"
        subtitle="Check your upcoming reservations."
      />
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest Reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
