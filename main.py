from tkinter import *
import pandas
from PIL import Image, ImageTk

# ---------------------------- CONSTANTS -------------------------------#
BACKGROUND_COLOR = "#B1DDC6"

# ---------------------------- DATA SETUP ------------------------------#
# Attempt to load learning progress; otherwise load the full question set
try:
    data = pandas.read_csv("data/questions_to_learn.csv")
    to_learn = data.to_dict(orient="records")
except FileNotFoundError:
    original_data = pandas.read_csv("data/question.csv")  # CSV must have 'Question' and 'Answer' columns
    to_learn = original_data.to_dict(orient="records")

current_index = 0

# ---------------------------- FUNCTIONS -------------------------------#
def show_card():
    """
    Display the current question and answer on the canvas immediately.
    No timers: updates happen as soon as buttons are pressed.
    """
    card = to_learn[current_index]
    canvas.itemconfig(card_title, text=f"Q: {card['Question']}", fill="black")
    canvas.itemconfig(card_word, text=f"A: {card['Answer']}", fill="black")


def next_card():
    """
    Advance to the next card (if available) without delay.
    """
    global current_index
    if current_index < len(to_learn) - 1:
        current_index += 1
        show_card()


def prev_card():
    """
    Return to the previous card (if available) without delay.
    """
    global current_index
    if current_index > 0:
        current_index -= 1
        show_card()


def save_progress():
    """
    Save the current state of cards to disk on exit.
    """
    pandas.DataFrame(to_learn).to_csv("data/questions_to_learn.csv", index=False)

# ---------------------------- UI SETUP --------------------------------#
window = Tk()
window.title("Civics Flashcards")
window.config(padx=50, pady=50, bg=BACKGROUND_COLOR)

# Canvas for card
canvas = Canvas(width=800, height=526, bg=BACKGROUND_COLOR, highlightthickness=0)
card_front_img = PhotoImage(file="images/card_front.png")
canvas.create_image(400, 263, image=card_front_img)
card_title = canvas.create_text(400, 150, text="", font=("Ariel", 28, "italic"), width=700, justify="center", anchor="n")
card_word  = canvas.create_text(400, 300, text="", font=("Ariel", 20, "bold"), width=700, justify="center", anchor="n")
canvas.grid(row=0, column=0, columnspan=2)

# Navigation Buttons using provided images, resized to 100x100 pixels
# Previous Button
prev_img_raw = Image.open("images/back1.png")
prev_img_resized = prev_img_raw.resize((100, 100), Image.Resampling.LANCZOS)
prev_img = ImageTk.PhotoImage(prev_img_resized)
prev_button = Button(image=prev_img, highlightthickness=0, command=prev_card)
prev_button.grid(row=1, column=0)

# Next Button
next_img_raw = Image.open("images/next1.png")
next_img_resized = next_img_raw.resize((100, 100), Image.Resampling.LANCZOS)
next_img = ImageTk.PhotoImage(next_img_resized)
next_button = Button(image=next_img, highlightthickness=0, command=next_card)
next_button.grid(row=1, column=1)

# Display the first card immediately on launch
show_card()

# Ensure progress is saved on window close
window.protocol("WM_DELETE_WINDOW", lambda: (save_progress(), window.destroy()))

window.mainloop()