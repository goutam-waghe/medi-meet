import { useState } from 'react';
import {
  RiTimeLine,
  RiDeleteBinLine,
  RiAddLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiCloseLine,
} from "@remixicon/react";

export default function TimeSlotCard({ schedule, setSchedule }) {

  const days = schedule.map(s => s.day);

  const [newSlot, setNewSlot] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: { start: '09:00', end: '10:00' } }), {})
  );

  const [addingSlot, setAddingSlot] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );

  const toggleAvailable = (dayIndex) => {
    setSchedule(prev => prev.map((d, i) =>
      i === dayIndex ? { ...d, available: !d.available } : d
    ));
  };

  const toggleExpand = (dayIndex) => {
    setSchedule(prev => prev.map((d, i) =>
      i === dayIndex ? { ...d, expanded: !d.expanded } : d
    ));
  };

  const showAddSlot = (day) => {
    setAddingSlot(prev => ({ ...prev, [day]: true }));
  };

  const hideAddSlot = (day) => {
    setAddingSlot(prev => ({ ...prev, [day]: false }));
    setNewSlot(prev => ({ ...prev, [day]: { start: '09:00', end: '10:00' } }));
  };

  const addSlot = (dayIndex) => {
    const day = schedule[dayIndex];
    const slot = newSlot[day.day];

    if (slot.start && slot.end && slot.start < slot.end) {
      setSchedule(prev => prev.map((d, i) =>
        i === dayIndex
          ? { ...d, slots: [...d.slots, { id: Date.now(), start: slot.start, end: slot.end }] }
          : d
      ));
      hideAddSlot(day.day);
    }
  };

  const removeSlot = (dayIndex, slotId) => {
    setSchedule(prev => prev.map((d, i) =>
      i === dayIndex
        ? { ...d, slots: d.slots.filter(s => s.id !== slotId) }
        : d
    ));
  };

  const updateSlot = (dayIndex, slotId, field, value) => {
    setSchedule(prev => prev.map((d, i) =>
      i === dayIndex
        ? {
            ...d,
            slots: d.slots.map(s =>
              s.id === slotId ? { ...s, [field]: value } : s
            )
          }
        : d
    ));
  };

  const updateNewSlot = (day, field, value) => {
    setNewSlot(prev => ({ ...prev, [day]: { ...prev[day], [field]: value } }));
  };

  return (
    <div className="p-6">
      <div className="space-y-5">

        {schedule.map((dayData, dayIndex) => (
          <div
            key={dayData.day}
            className="rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden"
          >

            {/* Header */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer border-b border-gray-200"
              onClick={() => toggleExpand(dayIndex)}
            >
              <div className="flex items-center gap-3">
                {dayData.expanded ? (
                  <RiArrowUpSLine size={20} />
                ) : (
                  <RiArrowDownSLine size={20} />
                )}

                <h2 className="text-lg font-semibold">{dayData.day}</h2>
                <span className="text-gray-500 text-sm">
                  ({dayData.slots.length} slots)
                </span>
              </div>

              <label
                className="flex items-center gap-2 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  checked={dayData.available}
                  onChange={() => toggleAvailable(dayIndex)}
                  className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm text-gray-600">Available</span>
              </label>
            </div>

            {/* Slots Visible */}
            {dayData.expanded && dayData.available && (
              <div className="px-4 pb-4 space-y-3">

                {dayData.slots.map((slot) => (
                  <div
                    key={slot.id}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200"
                  >

                    <RiTimeLine size={18} className="text-emerald-500" />

                    <input
                      type="time"
                      value={slot.start}
                      onChange={(e) =>
                        updateSlot(dayIndex, slot.id, 'start', e.target.value)
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />

                    <span className="text-gray-500">to</span>

                    <input
                      type="time"
                      value={slot.end}
                      onChange={(e) =>
                        updateSlot(dayIndex, slot.id, 'end', e.target.value)
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />

                    <button
                      onClick={() => removeSlot(dayIndex, slot.id)}
                      className="ml-auto p-2 text-red-500 hover:bg-red-100 rounded-lg"
                    >
                      <RiDeleteBinLine size={18} />
                    </button>

                  </div>
                ))}

                {/* Add Slot Button */}
                {!addingSlot[dayData.day] && (
                  <button
                    onClick={() => showAddSlot(dayData.day)}
                    className="w-full py-3 border-2 border-dashed border text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-50"
                  >
                    <RiAddLine size={18} />
                    Add Time Slot
                  </button>
                )}

                {/* Add Slot Input */}
                {addingSlot[dayData.day] && (
                  <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-300">

                    <RiTimeLine size={18} className="text-emerald-600" />

                    <input
                      type="time"
                      value={newSlot[dayData.day].start}
                      onChange={(e) =>
                        updateNewSlot(dayData.day, 'start', e.target.value)
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />

                    <span className="text-gray-600">to</span>

                    <input
                      type="time"
                      value={newSlot[dayData.day].end}
                      onChange={(e) =>
                        updateNewSlot(dayData.day, 'end', e.target.value)
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />

                    <button
                      onClick={() => addSlot(dayIndex)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Add
                    </button>

                    <button
                      onClick={() => hideAddSlot(dayData.day)}
                      className="p-2 text-gray-500 hover:bg-gray-200 rounded-lg"
                    >
                      <RiCloseLine size={18} />
                    </button>

                  </div>
                )}

              </div>
            )}

            {/* If unavailable */}
            {dayData.expanded && !dayData.available && (
              <div className="px-4 pb-4">
                <p className="text-gray-500 italic">Not available on this day</p>
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}
