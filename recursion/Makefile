# Compiler
CXX = g++

# Compiler flags
CXXFLAGS = -Iinclude -std=c++11

# Directories
SRC_DIR = src
INCLUDE_DIR = include
BUILD_DIR = build

# Output executable
TARGET = $(BUILD_DIR)/gcd_program

# Source files
SRCS = $(SRC_DIR)/main.cpp $(SRC_DIR)/gcd.cpp

# Object files
OBJS = $(SRCS:.cpp=.o)

# Build target
all: $(TARGET)

# Rule to build the executable
$(TARGET): $(OBJS) | $(BUILD_DIR)
	$(CXX) $(CXXFLAGS) $(OBJS) -o $(TARGET)

# Rule to compile .cpp files to .o
$(SRC_DIR)/%.o: $(SRC_DIR)/%.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Create build directory if it doesn't exist
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

# Clean up build files
clean:
	rm -rf $(BUILD_DIR)/*.o $(TARGET)

# Run the program
run: all
	./$(TARGET)
