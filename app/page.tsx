"use client";
import Link from "next/link";
import { useState } from "react";
import ListBox from "./_component/ListBox";
import TransferButton from "./_component/TransferButton";

export default function Home() {
  const [list1, setList1] = useState([
    {
      label: "text a",
      id: "a",
    },
    {
      label: "text r",
      id: "r",
    },
    {
      label: "text c",
      id: "c",
    },
    {
      label: "text d",
      id: "d",
    },
    {
      label: "text e",
      id: "e",
    },
  ]);

  const [list2, setList2] = useState([
    {
      label: "text b",
      id: "b",
    },
    {
      label: "text f",
      id: "f",
    },
    {
      label: "text g",
      id: "g",
    },
    {
      label: "text h",
      id: "h",
    },
    {
      label: "text i",
      id: "i",
    },
  ]);

  const [selectedItems1, setSelectedItems1] = useState<string[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<string[]>([]);

  const handleMoveRight = () => {
    const newList1 = list1.filter((item) => !selectedItems1.includes(item.id));
    const newList2 = list2.concat(
      list1.filter((item) => selectedItems1.includes(item.id))
    );
    setList1(newList1);
    setList2(newList2);
    setSelectedItems1([]);
  };

  const handleMoveLeft = () => {
    const newList1 = list1.concat(
      list2.filter((item) => selectedItems2.includes(item.id))
    );
    const newList2 = list2.filter((item) => !selectedItems2.includes(item.id));
    setList1(newList1);
    setList2(newList2);
    setSelectedItems2([]);
  };

  return (
    <main className="flex min-h-screen flex-col sm:flex-row items-center justify-between p-24">
      <ListBox
        items={list1}
        boxNumber={1}
        selectedItems={selectedItems1}
        setSelectedItems={setSelectedItems1}
      />
      <div className="flex flex-col gap-4 my-2">
        <TransferButton
          disabled={selectedItems2.length === 0}
          onClick={handleMoveLeft}
          mobileLabel="⬆ Transfer up"
        >
          Transfer left ➡
        </TransferButton>

        <TransferButton
          disabled={selectedItems1.length === 0}
          onClick={handleMoveRight}
          mobileLabel="⬇ Transfer down"
        >
          Transfer right ➡
        </TransferButton>
        <Link
          target="_blank"
          className="underline mt-10 text-lg"
          href="https://github.com/mahmudulnayeem/react-transfer-list"
        >
          Edit on GitHub 🚀
        </Link>
      </div>

      <ListBox
        items={list2}
        boxNumber={2}
        selectedItems={selectedItems2}
        setSelectedItems={setSelectedItems2}
      />
    </main>
  );
}
