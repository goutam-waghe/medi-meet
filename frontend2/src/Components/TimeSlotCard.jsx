import React, { useState } from "react";
import {
  RiAddBoxLine,
  RiDeleteBackFill,
  RiTimeLine,
} from "@remixicon/react";

const TimeSlotCard = ({ availability, setAvailability }) => {
  const [newSlotDay, setNewSlotDay] = useState(-1);
  const [newSlot, setNewSlot] = useState({
    startTime: "09:00",
    endTime: "10:00",
  });

  // Toggle ON/OFF
  const handleToggleDay = (dayIndex) => {
    const updated = [...availability];
    updated[dayIndex].available = !updated[dayIndex].available;
    setAvailability(updated);
  };

  // Update Time Slot
  const handleUpdateSlot = (dayIndex, slotId, field, value) => {
    const updated = [...availability];
    updated[dayIndex].slots = updated[dayIndex].slots.map((slot) =>
      slot.id === slotId ? { ...slot, [field]: value } : slot
    );
    setAvailability(updated);
  };

  // Delete Slot
  const handleDeleteSlot = (dayIndex, slotId) => {
    const updated = [...availability];
    updated[dayIndex].slots = updated[dayIndex].slots.filter(
      (slot) => slot.id !== slotId
    );
    setAvailability(updated);
  };

  // Add Slot
  const handleAddSlot = (dayIndex) => {
    const updated = [...availability];
    updated[dayIndex].slots.push({
      id: Date.now(),
      startTime: newSlot.startTime,
      endTime: newSlot.endTime,
    });
    setAvailability(updated);

    // Reset add form
    setNewSlot({ startTime: "09:00", endTime: "10:00" });
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Weekly Schedule
      </h2>

      <div className="space-y-6">
        {availability.map((day, dayIndex) => (
          <div key={day.day} className="border border-gray-200 rounded-lg p-6">
            {/* Day Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {day.day}
              </h3>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={day.available}
                  onChange={() => handleToggleDay(dayIndex)}
                  className="w-4 h-4 accent-blue-500 rounded"
                />
                <span className="text-sm font-medium text-gray-700">
                  {day.available ? "Available" : "Off"}
                </span>
              </label>
            </div>

            {/* Slots */}
            {day.available && (
              <div className="space-y-4">
                {day.slots.map((slot) => (
                  <div
                    key={slot.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <RiTimeLine size={18} className="text-blue-600" />

                    <div className="flex-1 flex items-center gap-2">
                      <input
                        type="time"
                        value={slot.startTime}
                        onChange={(e) =>
                          handleUpdateSlot(dayIndex, slot.id, "startTime", e.target.value)
                        }
                        className="border p-1 w-24 rounded"
                      />
                      <span className="text-gray-600">to</span>
                      <input
                        type="time"
                        value={slot.endTime}
                        onChange={(e) =>
                          handleUpdateSlot(dayIndex, slot.id, "endTime", e.target.value)
                        }
                        className="border p-1 w-24 rounded"
                      />
                    </div>

                    <button
                      onClick={() => handleDeleteSlot(dayIndex, slot.id)}
                      className="p-2 rounded text-red-600 hover:bg-red-50"
                    >
                      <RiDeleteBackFill size={16} />
                    </button>
                  </div>
                ))}

                {/* Add slot input */}
                {dayIndex === newSlotDay && (
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex-1 flex items-center gap-2">
                      <input
                        type="time"
                        value={newSlot.startTime}
                        onChange={(e) =>
                          setNewSlot({ ...newSlot, startTime: e.target.value })
                        }
                        className="border p-1 w-24 rounded"
                      />
                      <span className="text-gray-600">to</span>
                      <input
                        type="time"
                        value={newSlot.endTime}
                        onChange={(e) =>
                          setNewSlot({ ...newSlot, endTime: e.target.value })
                        }
                        className="border p-1 w-24 rounded"
                      />
                    </div>

                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                      onClick={() => {
                        handleAddSlot(dayIndex);
                        setNewSlotDay(-1);
                      }}
                    >
                      Add
                    </button>
                  </div>
                )}

                {/* Add slot button */}
                {dayIndex !== newSlotDay && (
                  <button
                    className="w-full flex items-center justify-center gap-2 border border-blue-500 text-blue-600 py-2 rounded hover:bg-blue-50"
                    onClick={() => setNewSlotDay(dayIndex)}
                  >
                    <RiAddBoxLine size={18} />
                    Add Time Slot
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotCard;
